import { useEffect, useState } from "react";
import ArticlesList from "../jsons/articles.json";
import EventsList from "../jsons/events.json";
import IndustryList from "../jsons/industry.json";

import ArticlesGrid from "./ArticlesGrid";
import EventList from "./EventList";

import MainCase from "./MainCase";
import { Tab, Tabs } from "@mui/material";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ArticlesEventsCases = () => {
  const sortedEvents = EventsList.slice().sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedArticles, setSelectedArticles] = useState(ArticlesList);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    const filteredArticles = ArticlesList.filter((article) =>
      article.industry.includes(selectedTab)
    );

    setSelectedArticles(filteredArticles);
    console.log("🍄 ~ file: ArticlesEventsCases.jsx:28 ~ filteredArticles:",filteredArticles);
  }, [selectedTab]);

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
                <p>Show All</p>
              </div>
              <Tabs
                value={selectedTab}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
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
                  slidesPerView={ 3 }
                  centeredSlides={false}
                  spaceBetween={30}
                >
                  {selectedArticles.map((article) => (
                    <SwiperSlide key={article.id}>
                      <ArticlesGrid
                        title={article.title}
                        category={article.category}
                        capabilities={article.capabilities}
                        industry={selectedTab}
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
              {sortedEvents.map((ev) => (
                <EventList
                  key={ev.id}
                  date={ev.date}
                  title={ev.event}
                  address={ev.address}
                  description={ev.description}
                  industry={selectedTab}
                />
              ))}
            </div>
            <div className="bgCircle bgCircle-pink bgBlur-right-top"></div>
            <div className="bgCircle bgCircle-yellow bgBlur-left-top"></div>
          </div>
        </div>
      </section>
      <MainCase industry={selectedTab} />
    </>
  );
};

export default ArticlesEventsCases;
