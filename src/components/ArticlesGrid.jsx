import CapabilitiesList from '../jsons/capabilities.json'

const articleImage = require.context('../images/articles', true );

const ArticlesGrid = ( props ) => {
  const { title, category, capabilities, image, industry } = props;
  
  return (
    <div className="article-grid-item">
      <span className='article-grid-image'>
        <img 
          src={articleImage(`./${image}`)}
          alt={ title }
        />
      </span>

      <div className="article-grid-stick">{category}</div>
      <div className="article-grid-label">
        <p>{title}</p>
        <div className="article-grid-capabilities-group">
            { capabilities.map((capId) => {
                const capability = CapabilitiesList.find((c) => c.id === capId);
                return <div key={ capability.id } className="article-capability">{capability.name}</div>;
            })}
        </div>
      </div>
    </div>
  );
};

export default ArticlesGrid;
