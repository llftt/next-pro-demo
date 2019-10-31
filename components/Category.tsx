import React from 'react';
import { withRouter, useRouter } from 'next/router';

/***
 * 非page组件接口路由参数
 */
interface IContentProps {
    router: any;
}
const Content = ({ router }: IContentProps) => {
    console.log('router', router);
    return (
        <>
            <div>content withrouter</div>
            <pre>{JSON.stringify(router, null, 2)}</pre>
        </>
    );
};

export function ContentU() {
    const router = useRouter();
    console.log('contentu router', router);
    return (
        <>
            <div>content useRouter</div>
            <pre>{JSON.stringify(router, null, 2)}</pre>
        </>
    );
}

export default withRouter(Content);
