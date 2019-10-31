import React from 'react';
import { stringify } from '@utils/index';
const About = (props: any) => <pre>about {stringify(props)}</pre>;
About.getInitialProps = async () => {
    console.log('About getInitialProps');

    return { data: 'initData' };
};
export default About;
