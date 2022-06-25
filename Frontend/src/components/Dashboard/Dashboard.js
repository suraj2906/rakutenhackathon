import React from 'react';
import Header from "../Header/Header";
import Card from "../UI/Card/Card";
import Profile from "../Profile/Profile";
import Banner from "../UI/Banner/Banner";
import {PaperAirplaneIcon, PaperClipIcon} from "@heroicons/react/outline";
import './Dashboard.css';
import {PieChart, Pie, Legend, ResponsiveContainer, Cell} from "recharts";

const Dashboard = () => {
    const data = [
        {name: 'Geeksforgeeks', students: 400},
        {name: 'Technical scripter', students: 700},
        {name: 'Geek-i-knack', students: 200},
        {name: 'Geek-o-mania', students: 1000}
    ];

    const testMeasurments = [
        {
            data: [
                {name: "glucose", value: 6, color: '#57c0e8'},
                {name: "SpO2", value: 5, color: "#FF6565"},
                {name: "Blood Pressure", value: 4, color: "#FFDA83"},
                {name: "Body Weight", value: 2, color: "purple"}
            ]
        }
    ];


    return (
        <div>
            <Header/>
            <div className="home__section h-[91vh] overflow-hidden px-10 py-5">
                <span className="dashboard-heading__main px-5">Dashboard</span>
                <div className="flex">
                    <div className="flex flex-col gap-5">
                        <Card className="card py-6 my-5 w-[20rem]">

                            <span className="subheading px-6">
                                Potential Leads
                            </span>
                            <hr/>
                            <div className="h-[68vh] flex-grow overflow-y-scroll">
                                <Profile type="square" name="dude 1"/>
                                <Profile type="square" name="dude 2"/>
                                <Profile type="square" name="dude 3"/>
                                <Profile type="square" name="dude 4"/>
                                <Profile type="square" name="dude 5"/>
                                <Profile type="square" name="dude 6"/>
                                <Profile type="square" name="dude 7"/>
                                <Profile type="square" name="dude 8"/>
                                <Profile type="square" name="dude 9"/>
                                <Profile type="square" name="dude 10"/>
                                <Profile type="square" name="dude 11"/>
                                <Profile type="square" name="dude 12"/>
                                <Profile type="square" name="dude 13"/>
                                <Profile type="square" name="dude 14"/>
                                <Profile type="square" name="dude 15"/>
                                <Profile type="square" name="dude 16"/>
                                <Profile type="square" name="dude 17"/>
                                <Profile type="square" name="dude 18"/>
                                <Profile type="square" name="dude 19"/>
                                <Profile type="square" name="dude 20"/>
                                <Profile type="square" name="dude 21"/>
                                <Profile type="square" name="dude 22"/>
                                <Profile type="square" name="dude 23"/>
                                <Profile type="square" name="dude 24"/>
                            </div>
                        </Card>
                    </div>
                    <div className="block flex flex-grow px-5 justify-evenly my-5 ">

                        <div>
                            <span className="block dashboard-heading__chart px-5 text-center">Insurance Sentiments</span>
                            <ResponsiveContainer width={700} height="80%">
                                <PieChart width={500} height={500}>
                                    <Legend verticalAlign="bottom" align="center"/>
                                    <Pie data={data} dataKey="students" outerRadius={250} fill="green"/>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div>
                            <span className="block dashboard-heading__chart px-5 text-center">Insurance Distributions</span>
                            <ResponsiveContainer width={700} height="80%">
                                <PieChart width={500} height={500}>
                                    <Legend verticalAlign="bottom" align="center"/>
                                    <Pie data={data} dataKey="students" outerRadius={250} fill="green"/>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Dashboard;