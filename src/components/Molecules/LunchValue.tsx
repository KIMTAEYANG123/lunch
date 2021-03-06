import { query as q } from 'faunadb';

import { imgURLObj, nameTypes } from '../../data';
import db from '../../db';
import Img from '../Atom/Img';
import TextList from '../Molecules/TextList';

type LunchValueProps = {
    name: nameTypes;
    isSelected: boolean;
    value?: string;
    valueList?: any;
    setValueList?: any;
    loading?: boolean;
    setLoading?: any;
};
const LunchValue = ({
    name,
    isSelected,
    value,
    valueList,
    setValueList,
    loading,
    setLoading,
}: LunchValueProps) => {
    const ref = q.Ref(q.Collection('prices'), '298076617337471490');
    const handleClickToResetValue = async () => {
        if (isSelected) {
            setLoading(true);

            const { data } = await db.query<any>(
                q.Update(ref, {
                    data: {
                        ...valueList,
                        [name]: 0,
                    },
                })
            );
            setValueList(data);

            setLoading(false);
        }
    };
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                height: 44,
                margin: '6px 0px',
            }}
        >
            <div onClick={handleClickToResetValue}>
                <Img isSelected ={isSelected} name ={name} imgURLObj={imgURLObj}></Img>
            </div>
            <TextList loading ={loading} isSelected={isSelected} value={value}/>
          
            {/* <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: 8,
                    height: 48,
                    borderBottom: isSelected ? '1px solid grey' : undefined,
                }}
            >
                {loading ? '...' : value}원
            </div> */}
        </div>
    );
};

export default LunchValue;
