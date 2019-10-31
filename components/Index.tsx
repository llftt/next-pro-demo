import React, { Component } from 'react';

export class Index extends Component {
    render() {
        return (
            <div>
                <div>index</div>
                <p className="scope">scope</p>

                {/*  嵌入样式  styled-jsx  */}
                <style jsx>
                    {`
                        .scope {
                            color: blue;
                        }
                    `}
                </style>
                <style global jsx>
                    {`
                        body {
                            background: white;
                        }
                    `}
                </style>
            </div>
        );
    }
}
