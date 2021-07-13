import React from 'react';

const RestMoney = ({percentLeftTotalvalue,getTotalValue,defaultTotalValue,valueList})=>{

    return (
        <div style={{ flex: 1 }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    height: 'calc(100% - 36px)',
                    width: '100%',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: `${percentLeftTotalvalue}%`,
                        width: '100%',
                        background: `hsl(${percentLeftTotalvalue}, 60%, 51%)`,
                        color: 'white',
                    }}
                >
                    <div>{`${
                        defaultTotalValue - getTotalValue(valueList)
                    }원 남음`}</div>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 4,
                    height: 36,
                    fontWeight: 'bold',
                }}
            >{`${new Date().getMonth() + 1}월 : ${getTotalValue(
                valueList
            )}원`}</div>
        </div>
    )
}

export default RestMoney;