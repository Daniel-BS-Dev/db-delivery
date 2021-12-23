import ContentLoader from 'react-content-loader';
//import { generateList } from '../../utils/list';


const ProductSkeleton = () => {
    //const laoderItems = generateList(1);

    return(
    <>
        <ContentLoader
           width={1000}
           height={575}
           viewBox="0 0 1000 575"
           backgroundColor="#9E9E9E"
           foregroundColor="#ecebeb"
        >
    
          <rect x="50" y="30" rx="10" ry="10" width="240" height="340" />
         
       </ContentLoader>
    </>
 )
}


export default ProductSkeleton;