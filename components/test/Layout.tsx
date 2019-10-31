import React from 'react';
const Layout = (props: any) => <div>{props.children}</div>;

const withLayout = (Component: any) => {
    return () => {
        return (
            <div>
                <Component />
            </div>
        );
    };
};

const withLayoutContent = (props: { content: any }) => <div>{props.content}</div>;

const Page = () => <p>Hello next.js</p>;
const withPage = withLayout(Page);
export { withPage, withLayoutContent };

export default Layout;
