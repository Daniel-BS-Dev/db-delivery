import ContentLoader from 'react-content-loader';
import { generateList } from '../../utils/list';


const ProductSkeleton = () => {
    const laoderItems = generateList(4);

    return(
    <>
    {laoderItems.map(items =>(
        <ContentLoader
           key={items} 
           width={800}
           height={575}
           viewBox="0 0 800 575"
           backgroundColor="#9E9E9E"
           foregroundColor="#ecebeb"
        >
    
          <rect x="12" y="58" rx="10" ry="10" width="240" height="340" />
         
       </ContentLoader>
    ))}
    </>
 )
}


export default ProductSkeleton;