import React from "react";
import { Tabs, Tab } from "react-bootstrap-tabs";
import { Container } from "react-bootstrap";
import AddNewsTab from "./AddNewsTab";
import AddDiscussion from "./AddDiscussion";
import AddLiveUpdate from "./AddLiveUpdate";
import AddPodcast from "./AddPodcast";
import NewsHistoryTab from './NewsHistoryTab'

import { Link } from 'react-router-dom'

function EditorTabContain() {
  return (
    <div>
      <Tabs
        style={{
          border: "4px solid #8395a7",
          backgroundColor: "#656D78",
        }}
        headerStyle={{
          fontWeight: "normal",
          color: "white",
          border: "2px",
          cursor: "pointer",
          fontSize: 16,
        }}
        activeHeaderStyle={{ color: "#6D214F", backgroundColor: "white" }}
        contentStyle={{ backgroundColor: "#a4b0be" }}
      >
        <Tab label="My news History">
          <div
            style={{
              maxHeight: "80vh",
              minHeight: "80vh",
              paddingTop: 30,
              paddingLeft: 30,
              paddingBottom: 30,
             
            }}
          >
           < NewsHistoryTab />
            
          </div>
        </Tab>
        <Tab label="Add Podcast">
          <div
            style={{
              maxHeight: "80vh",
              minHeight: "80vh",
              paddingTop: 30,
              paddingLeft: 30,
              paddingBottom: 30,
              overflowY: "scroll",
            }}
          >
            <AddPodcast />
          </div>
        </Tab>

        <Tab label="Add Live Update">
          <div
            style={{
              maxHeight: "80vh",
              minHeight: "80vh",
              paddingTop: 30,
              paddingLeft: 30,
              paddingBottom: 30,
              overflowY: "scroll",
            }}
          >
            <AddLiveUpdate />
          </div>
        </Tab>

        <Tab label="Add Disscussion">
          <div
            style={{
              maxHeight: "80vh",
              minHeight: "80vh",
              paddingTop: 30,
              paddingLeft: 30,
              paddingBottom: 30,
              overflowY: "scroll",
            }}
          >
            <AddDiscussion />
          </div>
        </Tab>

        <Tab label="Add News data">
          <div
            style={{
              maxHeight: "80vh",
              minHeight: "80vh",
              paddingTop: 30,
              paddingLeft: 30,
              paddingBottom: 30,
              overflowY: "scroll",
            }}
          >
            <AddNewsTab />
          </div>
        </Tab>
        
      </Tabs>
    </div>
  );
}

export default EditorTabContain;
