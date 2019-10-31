import React from 'react';
import { Index as IndexComp } from '@components/Index';
import Title from '@components/common/Title';
/**Link, */
import Link from 'next/link';
import Router from 'next/router';
import { stringify } from '@utils/index';
import axios from 'axios';

import { Button } from 'antd';
import JsonDiff from '@components/test/Diff';
// import Head from 'next/head'

import '@static/styles/common.less';

export default class Index extends React.Component<{ data: any }> {
    //拓展
    static async getInitialProps() {
        // throw new Error('fakeErr') 获取数据失败，展示默认错误页面
        const res = await axios.get('http://localhost:3001/api/test');
        console.log('res:', res.data);
        return {
            data: res.data,
        };
    }

    componentDidMount() {
        Router.events.on('', (url: string) => {
            console.log(`App is changing to:`, url);
        });

        Router.events.on('', (url: string) => {
            console.log('App change complete:', url);
        });

        Router.events.on('', (err: any, url: string) => {
            if (err.cancelled) {
                console.log(`Route to ${url} was cancelled!`);
            }
        });

        Router.beforePopState(({ url }: { url: string }) => {
            console.log('beforePopState:', url);
            return true;
        });
    }

    onBtnClick = () => {
        console.log('click');
    };
    render() {
        return (
            <div>
                <Title />
                <pre>InitialProps: {stringify(this.props.data)}</pre>
                <Link href="/about">
                    <a title="about page">click,link router</a>
                </Link>
                <br />

                <Link href={{ pathname: '/about', query: { name: 'test' } }} replace>
                    <a>click,link router with params</a>
                </Link>
                <div>
                    Router API{' '}
                    <button onClick={() => Router.push('/category', '/category/1', { gametype: '1' })}>
                        click, API
                    </button>
                </div>
                <IndexComp />
                <img src={require('@images/cat.jpg')} />

                <Button onClick={this.onBtnClick}>Antd button</Button>
                <div className="common" />

                <JsonDiff
                    oldJson={{ workflows: [{ foo: 'abc' }] }}
                    newJson={{ workflows: [{ foo: 'abz', test: 'aa' }] }}
                />
            </div>
        );
    }
}
