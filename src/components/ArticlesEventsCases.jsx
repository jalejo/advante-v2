import { useEffect, useState } from "react";

import ArticlesList from "../jsons/articles.json";
import EventsList from "../jsons/events.json";
import IndustryList from "../jsons/industry.json";
import CasesList from '../jsons/cases.json';

import ArticlesGrid from "./ArticlesGrid";
import EventList from "./EventList";


import MainCase from "./MainCase";
import { Tab, Tabs } from "@mui/material";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ArticlesEventsCases = () => {


  const [selectedTab, setSelectedTab] = useState(1);
  
  const [selectedArticles, setSelectedArticles] = useState(ArticlesList);
  const [selectedEvents, setSelectedEvents] = useState(EventsList)
  const [selectedCase, setSelectedCase] = useState(CasesList[0])

  //const [loadedEvents, setLoadedEvents] = useState(3);

  /************  Tabs ************/

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  /************  Articles ************/

  useEffect(() => {
    const filteredArticles = ArticlesList.filter((article) =>
      article.industry.includes(selectedTab)
    );

    const filteredEvents = EventsList.filter((eventF) => 
      eventF.industry.includes(selectedTab)
    );

    const filteredCases = CasesList.filter((caseF) =>
      caseF.industry.includes(selectedTab)
    );

    setSelectedArticles(filteredArticles);
    setSelectedEvents(filteredEvents.slice(0, 3));
    setSelectedCase( filteredCases[0] );
    
  }, [selectedTab]);

  /************  Events ************/

  /*
  const [displayedEvents, setDisplayedEvents] = useState(
    selectedEvents.slice(0, loadedEvents)
  );


  const sortedEvents = selectedEvents.slice().sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  const loadMoreEvents = () => {
    const newLoadedEvents = loadedEvents + 3;
    const eventsToAdd = displayedEvents.slice(loadedEvents, newLoadedEvents);

    setDisplayedEvents([...displayedEvents, ...eventsToAdd]);
    setLoadedEvents(newLoadedEvents);
  };
*/
  return (
    <>
      <section className="articleEventCasesWrapper">
        <div className="containerFull">
          <div className="subsection-articles">
            <h3>
              Articles, Events and{" "}
              <span className="text-orange-violet-pink">Cases</span>.
            </h3>
            <div className="title-underline orange-violet-pink"></div>

            <div className="articlesNavWrapper">
              <div>
                <a>Show All</a>
              </div>
              <Tabs
                value={selectedTab}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                sx={{
                  "& .MuiTabs-indicator":{
                    display: "none",
                  },
                  "& .MuiButtonBase-root":{
                    color: "var(--slate-gray)",
                    fontSize: "1.2rem",
                    textTransform: "inherit",
                    fontWeight: 400,
                    padding: "0.25rem 1.5rem",
                  },
                  " .MuiButtonBase-root.Mui-selected":{
                    color: "var(--azure-blue)",
                    fontWeight:"600"
                  },
                  " .MuiButtonBase-root .MuiTouchRipple-root":{
                    display: "none"
                  }
                }}
              >
                {IndustryList.map((industry) => (
                  <Tab
                    key={industry.id}
                    label={industry.name}
                    value={industry.id}
                  />
                ))}
              </Tabs>
            </div>

            <div className="articles-wrapper">
              <div>
                <li></li>
              </div>
              <div className="articles-grid">
                <Swiper
                  slidesPerView={ 1 }
                  centeredSlides={false}
                  spaceBetween={10}
                  breakpoints={{
                    900: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    }
                  }}
                >
                  {selectedArticles.map((article) => (
                    <SwiperSlide key={article.id}>
                      <ArticlesGrid
                        title={article.title}
                        category={article.category}
                        capabilities={article.capabilities}
                        image = { article.image }
                      />
                    </SwiperSlide>

                  ))}
                </Swiper>

              </div>
            </div>

            <div className="bgCircle bgCircle-violet bgBlur-right-top"></div>
            <div className="bgCircle bgCircle-orange bgBlur-left-top"></div>
            <div className="bgCircle bgCircle-blue bgBlur-right-bottom"></div>
          </div>
          <div className="subsection-events">
            <h3>
              Explore{" "}
              <span className="text-orange-violet-pink">Tech Events</span>.
            </h3>

            <div className="events-grid">
              {selectedEvents.map((ev) => (
                <EventList
                  key={ev.id}
                  date={ev.date}
                  title={ev.title}
                  address={ev.address}
                  description={ev.description}
                  industry={selectedTab}
                  image={ ev.image}
                />
              ))}
            </div>
            
            {
            /*
            loadedEvents < displayedEvents.length && (
              <button onClick={loadMoreEvents}>Load More</button>
            )
            */
            }

            <div className="bgCircle bgCircle-pink bgBlur-right-top"></div>
            <div className="bgCircle bgCircle-yellow bgBlur-left-top"></div>
          </div>
        </div>
      </section>
      <MainCase selectedCase={selectedCase} />
    </>
  );
};

export default ArticlesEventsCases;
