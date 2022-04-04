import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import "./Dashboard.css"

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div>
            <h1> This is Deshbord Chart Page</h1>

            <div className="twoChart">
                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Bar dataKey="revenue" barSize={30} fill="#8884d8" />
                    <Tooltip></Tooltip>
                </BarChart>
            </div>

            <div className="oneChart">
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="month" stroke="#8884d8"></Line>
                    <XAxis dataKey="month"></XAxis>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"></CartesianGrid>
                    <YAxis dataKey="sell"></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;