import Header from './Header'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { useNavigate } from 'react-router-dom';

import ArticlesJsonList from '../../jsons/articles.json'
const imagesPath = require.context('../../images/articles', true)

const publishedArticles = ArticlesJsonList.filter( ( article ) => !article.draft );

const ArticlesList = () => {

    const navigate = useNavigate();

    const goToArticle = ( slug ) => {
        navigate(`/articles/${slug}`);
    }

    return (
        <>
        <Header 
            type = "articles-grid"
            title = "ARTICLES."
            subtitle = "We have been creating innovative digital experiences for over 16 years, ensuring that our customers receive the best possible service."
            bgImage = "articles-header.jpg"
        />
            <section className='articles-grid-wrapper'>
                <div className='containerFull'>
                    <ImageList className='articles-grid' variant="masonry" >
                        {
                            publishedArticles.map( (item) => (
                                <ImageListItem key={ item.id }>
                                    <div className='article-card' onClick={ (event) => goToArticle( item.slug ) }>

                                        <div className='article-card-image'>
                                            <img 
                                                srcSet={ imagesPath(`./${ item.thumbnail }`) }
                                                src={ imagesPath(`./${ item.thumbnail }`) }
                                                alt={ item.title }
                                                loading='lazy'
                                            />
                                        </div>
                                        <div className='article-card-text'>
                                            <h5>{ item.title }</h5>
                                            <p>{ item.excerpt }</p>
                                        </div>
                                    </div>
                                </ImageListItem>
                                
                            ) )
                        }
                    </ImageList>
                </div>
            </section>
        </>
    );
  }
  
  export default ArticlesList;