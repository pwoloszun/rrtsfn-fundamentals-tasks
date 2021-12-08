import { createContainer } from 'unstated-next';
import useManageRealEstates from '../hooks/useManageRealEstates';

const RealEstateContainer = createContainer(useManageRealEstates);

export default RealEstateContainer;
