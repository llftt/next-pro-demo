import { stringify } from '@utils/index';
import Content, { ContentU } from '@components/Category';
export default (props: any) => {
    return (
        <div>
            <pre>{stringify(props)}</pre> <Content /> <ContentU />
        </div>
    );
};
