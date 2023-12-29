import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroller";
import CaseStudiesLis from "../../jsons/case-studies.json"


const CasePath = require.context('../../images/cases', true );


const CaseStudiesList = () => {

    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [startIndex, setStartIndex] = useState(0);
    const [loadCount, setLoadCount] = useState(10);

    const fetchMoreData = () => {

        setTimeout(() => {
            const newData = CaseStudiesLis.slice(startIndex, startIndex + loadCount);

            if (startIndex + loadCount >= CaseStudiesLis.length) {
                setHasMore(false);
            }

            setItems([...items, ...newData]);
            setStartIndex(startIndex + loadCount);

        }, 750);
    };

    useEffect(() => {
        const initialData = CaseStudiesLis.slice(startIndex, startIndex + loadCount);
        setItems(initialData);
        setStartIndex(startIndex + loadCount);
    }, []);

  return (
    <section className="case-studies-list">
        <div className="containerFull">
            <InfiniteScroll 
                hasMore={hasMore}
                loader={<div className="loader" key={0}>Loading ...</div>}
                loadMore={fetchMoreData}
            >
            {
                items.map( caseStudy => (
                    <div className="case-study-card" key={ caseStudy.id }>
                        <div className="case-study-image">

                            <img 
                                src={CasePath(`./${ caseStudy["featured-image"] }`)} 
                                alt={caseStudy.client} 
                            />

                        </div>
                        <div 
                            className="case-study-content"
                            style={{ backgroundColor: caseStudy.color + '10'} }
                        >
                            <h6>{ caseStudy.client}</h6>
                            <p>{ caseStudy.content }</p>
                            <ul className="case-study-thumbnail">
                                {
                                    caseStudy["gallery-images"].map( (caseThumbnail, index )=> (
                                        <li key={index}> 
                                            <img 
                                                src={ CasePath(`./${ caseThumbnail }`) }
                                            />
                                        </li>
                                    )  )
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
            </InfiniteScroll>
        </div>
    </section>
  );
};

export default CaseStudiesList;
