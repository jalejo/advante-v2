
import { useParams } from 'react-router-dom';
import ArticlesList from '../../jsons/articles.json'
import Header from './Header'

const ArticleTemplate = () => {
  const { slug } = useParams();
  const article = ArticlesList.find((a) => a.slug === slug);

const imagesPath = require.context('../../images/articles', true)

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
    <Header 
        type = "article"
        title = { article.title }
        subtitle = { article.subtitle }
        bgImage = { article.hero }
    />
    <section className="article-template">
        
        <div className='article-content-wrapper containerArticle'>

            <div className="bgCircle bgCircle-pink"></div>
            <div className="bgCircle bgCircle-blue"></div>
            <div className="bgCircle bgCircle-violet"></div>
            <div className="bgCircle bgCircle-green"></div>

            {article.content.map((block, index) => (
                <div className='article-content-block' key={index}>
                    {block.blockTitle && <h3>{block.blockTitle}</h3>}
                    {block.blockSubTitle && <h4>{block.blockSubTitle}</h4>}
                    {block.blockMiniTitle && <h6>{block.blockMiniTitle}</h6>}
            
                    {block.blockContent && (
                        <div dangerouslySetInnerHTML={{ __html: block.blockContent.join('') }} />
                    )}
                    {block.blockList && (
                        <ul>
                        {block.blockList.map((item, itemIndex) => (
                            <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                        </ul>
                    )}
                    {block.blockImage && (
                    
                        <div className='article-image'> 
                            <img 
                                src={ imagesPath(`./${ block.blockImage }`) }

                            />
                            {
                                block.blockImageFooter && (
                                    <p className='article-image-footer'> { block.blockImageFooter } </p>
                                )
                            }
                        </div>
                
                    )

                    }
                </div>
            ))}

        </div>


    </section>

    </>

  );
};

export default ArticleTemplate;
