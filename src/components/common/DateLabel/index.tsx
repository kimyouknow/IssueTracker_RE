import Icon from '@/components/common/Icon';
import { DateType, formatDateYYYYMMDD } from '@/utils/date.util';

import * as S from './DateLabel.style';

export interface DateLabelProps {
  date: DateType;
}

const DateLabel = ({ date }: DateLabelProps) => {
  const YYYYMMDD = formatDateYYYYMMDD(date);
  return (
    <S.Container>
      <Icon type="calendar" />
      <S.Text>{YYYYMMDD}</S.Text>
    </S.Container>
  );
};

export default DateLabel;
