from django.http import HttpResponse, JsonResponse
from django.http import JsonResponse
from django.shortcuts import HttpResponse
import requests
import datetime
import pyrebase
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.

firebaseConfig = {
  "apiKey": "AIzaSyBVGnfWCyKYocokgDPi_hGjVFoWKAU43Fw",
  "authDomain": "metadata-ee971.firebaseapp.com",
  "projectId": "metadata-ee971",
  "storageBucket": "metadata-ee971.appspot.com",
  "messagingSenderId": "101391171303",
  "appId": "1:101391171303:web:5f19fe2751468318d36c42",
  "measurementId": "G-HEDT1PEHML",
  "databaseURL": "https://metadata-ee971-default-rtdb.firebaseio.com"
}

firebase = pyrebase.initialize_app(firebaseConfig)
database = firebase.database()
headers = {'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAIxHdwEAAAAAA52WV4lx1pZPwETXdIDT8cRn40E%3DEgHRwDtdezUZ3svok8RdhDzHxZw8JMsYzgl4UPHae4Lx50krzj' }
def hello(request):
    return HttpResponse("hello world");


# ---------------------------------------------------------------------------- #
#                                  Twitter API                                 #
# ---------------------------------------------------------------------------- #

def getRecentTweets(request, category):
    current = datetime.datetime.utcnow()
    span = datetime.timedelta(minutes=5)
    recent = current - span
    # print();
    payload = {
        'query': str(category), 
        'max_results': 50, 
        'start_time': recent.strftime('%Y-%m-%dT%H:%M:%S.000Z'),
        'user.fields':"name"
    }
    tweets = requests.get("https://api.twitter.com/2/tweets/search/recent", headers=headers, params=payload)
    print(tweets)
    database.child("twitter").child(str(recent.strftime("%H%m%S%d%m%y"))).set(tweets.json())
    data = tweets.json()["data"]
    text_data = []
    for i in range(len(data)):
        text = data[i]["text"]
        text_data.append(text)
    return JsonResponse(text_data, safe=False)


def getTwitterUser(request, id):
    payload = {
        "expansions": "author_id",
        "user.fields": "created_at,description,entities,id,location,name,profile_image_url,protected,public_metrics,url,username"
    }
    user = requests.get("https://api.twitter.com/2/tweets/"+id, params=payload, headers=headers)
    return JsonResponse(user.json()['includes']['users'][0], safe=False)



# ---------------------------------------------------------------------------- #
#                                   User apis                                  #
# ---------------------------------------------------------------------------- #
@csrf_exempt
def storeUser(request):
    if request.method == "POST":
        data = json.loads(request.body);
        # print(data)
        username = data.get("username")
        first_name = data.get("first_name")
        last_name = data.get("last_name")
        age = data.get("age")
        favourites = data.get("interests")
        social_instagram = data.get("instagram")
        social_twitter = data.get("twitter")
        social_whatsapp = data.get("whatsapp")
        print({
            "username": username,
            "first_name": first_name,
            "last_name": last_name,
            "age": age,
            "favourites": favourites,
            "social_instagram": social_instagram,
            "social_twitter": social_twitter,
            "social_whatsapp": social_whatsapp,
        })
        database.child("users").child(username).set({
            "username": username,
            "first_name": first_name,
            "last_name": last_name,
            "age": age,
            "favourites": favourites,
            "social_instagram": social_instagram,
            "social_twitter": social_twitter,
            "social_whatsapp": social_whatsapp,
        })
        return JsonResponse({
            "status": "success",
        })
    return JsonResponse({
        "status": "error",
        "message": "Some error occured"
    })

@csrf_exempt
def getUserDetails(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("username")
        user = database.child("users").child(username).get()
        return JsonResponse(user.val(), safe=False)


@csrf_exempt
def updateUser(request):
    if request.method == "POST":
        data = json.loads(request.body)
        updates = {}
        for key, value in data.items():
            updates[key] = value
        database.child("users").child(data.get("username")).update(updates)
        return JsonResponse({
            "status": "success"
        })



# ---------------------------------------------------------------------------- #
#                               Scheduling a call                              #
# ---------------------------------------------------------------------------- #

def scheduleCall(request):
    if request.method == "POST":
        data = json.loads(request.body);
        requester = data.get("requester")
        timing = data.get("timing")
        approver = data.get("approver")
        message = data.get("message")
        database.child("schedules").child(requester).child(timing).set({
            "requester": requester,
            "approver": approver,
            "timing": timing,
            "message": message,
            "status": "wait"
        })
        return JsonResponse({
            'status' : "success"
        })

def approveCall(request):
    if request.method == "POST":
        data = json.loads(request.body);
        requester = data.get("requester")
        timing = data.get("timing")
        database.child("schedules").child(requester).child(timing).update({
            "status" : "approved"
        })
        return JsonResponse({
            'status' : "success"
        })

def denyCall(request):
    if request.method == "POST":
        data = json.loads(request.body);
        requester = data.get("requester")
        timing = data.get("timing")
        database.child("schedules").child(requester).child(timing).update({
            "status" : "denied",
            "message": "Your call request has been denied."
        })
        return JsonResponse({
            'status' : "success"
        })

def updateCallDetails(request):
    if request.method == "POST":
        data = json.loads(request.body);
        requester = data.get("requester")
        timing = data.get("timing")
        database.child("schedules").child(requester).child(timing).update({
            "status" : "denied",
            "message": "Your call request has been denied."
        })
        return JsonResponse({
            'status' : "success"
        })

def notificationTrigger(request):
    pass

def cancelCall(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        requester = data.get("requester")
        timing = data.get("timing")
        database.child(requester).child(timing).remove()
        return JsonResponse({
            'status' : "success"
        })


# ---------------------------------------------------------------------------- #
#                                    Groups                                    #
# ---------------------------------------------------------------------------- #

def createGroup(request):
    if request.method == "POST":
        data = json.loads(request.body)
        name = data.get("name")
        description = data.get("desc")
        username = data.get("username")
        database.child("groups").child(name).set({
            "name": name,
            "description": description,
            "created_on" : datetime.datetime.utcnow(),
            "admin": username
        })
        database.child("groups").child(name).child("members").child("username").set({
            "username": username,
            "joined_on": datetime.datetime.utcnow(),
        })
        database.child("users").child(username).child("groups").child(name).set({
            "name": name,
            "chatlink": ""
        })
        return JsonResponse({
            "status": "success"
        })

def deleteGroup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get("username")
        name = data.get("name")
        if database.child("groups").child(name).get().val()['admin'] == username:
            database.child("groups").child(name).remove()
            return JsonResponse({
                "status": "success"
            })

def modifyDescription(request):
    if request.method == "POST":
        data = json.loads(request.body)
        name = data.get("name")
        description = data.get("desc")
        database.child("groups").child(name).update({
            "description": description
        })

def addMember(request):
    if request.method == "POST":
        data = json.loads(request.body)
    
def removeMember(request):
    if request.method == "POST":
        data = json.loads(request.body)

def getTotalMembers(request):
    if request.method == "POST":
        data = json.loads(request.body)


# ---------------------------------------------------------------------------- #
#                                public post api                               #
# ---------------------------------------------------------------------------- #


# ---------------------------------------------------------------------------- #
#                                   Messages                                   #
# ---------------------------------------------------------------------------- #