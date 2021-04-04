import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { usersReducerSlice } from '../redux/reducers/usersReducer';
import { calcPercentage } from '../utils/calculatePercentage';

const UsersStatistic = () => {
  const { users, dischargedUsersCount } = useSelector(usersReducerSlice);

  const [malePercent, femalePercent] = useMemo(() => {
    const { mlCount: maleCount, fmCount: femaleCount } = users.reduce((accum, user) => {
      let { mlCount, fmCount } = accum;

      if (user.gender === 'male') mlCount += 1;
      else fmCount += 1;

      return { mlCount, fmCount };
    }, { mlCount: 0, fmCount: 0 });

    return calcPercentage(maleCount, femaleCount);
  }, [users]);

  return (
    <div className="paper p-2 y">
      <div className="typography h6">
        Users:
        {' '}
        {users.length}
      </div>
      <div className="typography h6">
        Discharged users:
        {' '}
        {dischargedUsersCount}
      </div>
      <div className="typography h6">
        Male:
        {' '}
        {malePercent.toFixed(2)}
        %
      </div>
      <div className="typography h6">
        Female:
        {' '}
        {femalePercent.toFixed(2)}
        %
      </div>
    </div>
  );
};

export default UsersStatistic;
