import React from 'react';

import { diffString } from 'json-diff';

import './diff.less';

const EMPTY = '""';

const handleJsonDiff = (oldJson: any, newJson: any) => {
    let mergedOldJson = oldJson || EMPTY;
    let mergedNewJson = newJson || EMPTY;
    try {
        mergedOldJson = JSON.parse(mergedOldJson);
        mergedNewJson = JSON.parse(mergedNewJson);
    } catch (err) {
        throw new Error('invalid json');
    }
    return diffString(mergedOldJson, mergedNewJson);
};

interface IJsonDiffProps {
    oldJson: any;
    newJson: any;
    raw?: boolean;
}
const JsonDiff: React.SFC<IJsonDiffProps> = ({ oldJson, newJson, raw }) => {
    let diff: any;
    try {
        if (raw) {
            diff = handleJsonDiff(oldJson, newJson);
        } else {
            diff = diffString(oldJson, newJson);
        }
    } catch (err) {
        return <div>JSON ERROR</div>;
    }
    console.log('diff', diff);
    console.log('type', typeof diff);
    return (
        <div style={{ overflow: 'auto', width: 400 }}>
            <pre>
                {typeof diff === 'string' &&
                    diff.split('\n').map((e, i) => {
                        let row = null;
                        if (e.indexOf('[31m-') > -1 && e.indexOf('[39m') > -1) {
                            row = (
                                <p key={i} className={'delete'}>
                                    {e.replace(new RegExp('\\[31m|\\[39m', 'gm'), '')}
                                </p>
                            );
                        } else if (e.indexOf('[32m+') > -1 && e.indexOf('[39m') > -1) {
                            row = (
                                <p key={i} className={'add'}>
                                    {e.replace(new RegExp('\\[32m|\\[39m', 'gm'), '')}
                                </p>
                            );
                        } else {
                            row = <p key={i}>{e}</p>;
                        }

                        return row;
                    })}
            </pre>
        </div>
    );
};

export default JsonDiff;
