import {withProps} from 'recompose';
import FormTextInputWithCalendar from './FormTextInputWithCalendar';
import FlexWritableFieldItem from './FlexWritableFieldItem';

export default withProps({component: FormTextInputWithCalendar})(
  FlexWritableFieldItem,
);
