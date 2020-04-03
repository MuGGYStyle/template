import Loadable from 'react-loadable';
import Loading from 'ba-components/Loading';

// Dashboard
export const DashboardV1 = Loadable({
  loader: () => import('./Dashboard/Dashboard'),
  loading: Loading,
});
export const DashboardV2 = Loadable({
  loader: () => import('./Dashboard/DashboardV2'),
  loading: Loading,
});

// Layouts
export const AppLayout = Loadable({
  loader: () => import('./Layouts/AppLayout'),
  loading: Loading,
});
export const Responsive = Loadable({
  loader: () => import('./Layouts/Responsive'),
  loading: Loading,
});
export const Grid = Loadable({
  loader: () => import('./Layouts/Grid'),
  loading: Loading,
});

// Tables
export const SimpleTable = Loadable({
  loader: () => import('./Tables/BasicTable'),
  loading: Loading,
});
export const AdvancedTable = Loadable({
  loader: () => import('./Tables/AdvancedTable'),
  loading: Loading,
});
export const TreeTable = Loadable({
  loader: () => import('./Tables/TreeTable'),
  loading: Loading,
});
export const CrudTable = Loadable({
  loader: () => import('./Tables/CrudTable'),
  loading: Loading,
});
export const TablePlayground = Loadable({
  loader: () => import('./Tables/TablePlayground'),
  loading: Loading,
});

// Forms
export const ReduxForm = Loadable({
  loader: () => import('./Forms/ReduxForm'),
  loading: Loading,
});
export const DateTimePicker = Loadable({
  loader: () => import('./Forms/DateTimePicker'),
  loading: Loading,
});
export const CheckboxRadio = Loadable({
  loader: () => import('./Forms/CheckboxRadio'),
  loading: Loading,
});
export const Switches = Loadable({
  loader: () => import('./Forms/Switches'),
  loading: Loading,
});
export const Selectbox = Loadable({
  loader: () => import('./Forms/Selectbox'),
  loading: Loading,
});
export const Rating = Loadable({
  loader: () => import('./Forms/Rating'),
  loading: Loading,
});
export const SliderRange = Loadable({
  loader: () => import('./Forms/SliderRange'),
  loading: Loading,
});
export const Buttons = Loadable({
  loader: () => import('./Forms/Buttons'),
  loading: Loading,
});
export const Textbox = Loadable({
  loader: () => import('./Forms/Textbox'),
  loading: Loading,
});
export const Autocomplete = Loadable({
  loader: () => import('./Forms/Autocomplete'),
  loading: Loading,
});
export const TextEditor = Loadable({
  loader: () => import('./Forms/TextEditor'),
  loading: Loading,
});
export const Upload = Loadable({
  loader: () => import('./Forms/Upload'),
  loading: Loading,
});

// UI Components
export const Badges = Loadable({
  loader: () => import('./UiElements/Badges'),
  loading: Loading,
});
export const Avatars = Loadable({
  loader: () => import('./UiElements/Avatars'),
  loading: Loading,
});
export const Accordion = Loadable({
  loader: () => import('./UiElements/Accordion'),
  loading: Loading,
});
export const List = Loadable({
  loader: () => import('./UiElements/List'),
  loading: Loading,
});
export const PopoverTooltip = Loadable({
  loader: () => import('./UiElements/PopoverTooltip'),
  loading: Loading,
});
export const Notification = Loadable({
  loader: () => import('./UiElements/Notification'),
  loading: Loading,
});
export const Typography = Loadable({
  loader: () => import('./UiElements/Typography'),
  loading: Loading,
});
export const Tabs = Loadable({
  loader: () => import('./UiElements/Tabs'),
  loading: Loading,
});
export const Cards = Loadable({
  loader: () => import('./UiElements/Cards'),
  loading: Loading,
});
export const ImageGrid = Loadable({
  loader: () => import('./UiElements/ImageGrid'),
  loading: Loading,
});
export const Progress = Loadable({
  loader: () => import('./UiElements/Progress'),
  loading: Loading,
});
export const DialogModal = Loadable({
  loader: () => import('./UiElements/DialogModal'),
  loading: Loading,
});
export const Steppers = Loadable({
  loader: () => import('./UiElements/Steppers'),
  loading: Loading,
});
export const DrawerMenu = Loadable({
  loader: () => import('./UiElements/DrawerMenu'),
  loading: Loading,
});
export const Paginations = Loadable({
  loader: () => import('./UiElements/Paginations'),
  loading: Loading,
});
export const Breadcrumbs = Loadable({
  loader: () => import('./UiElements/Breadcrumbs'),
  loading: Loading,
});
export const Icons = Loadable({
  loader: () => import('./UiElements/Icons'),
  loading: Loading,
});
export const SliderCarousel = Loadable({
  loader: () => import('./UiElements/SliderCarousel'),
  loading: Loading,
});
export const Tags = Loadable({
  loader: () => import('./UiElements/Tags'),
  loading: Loading,
});
export const Dividers = Loadable({
  loader: () => import('./UiElements/Dividers'),
  loading: Loading,
});

// Chart
export const LineCharts = Loadable({
  loader: () => import('./Charts/LineCharts'),
  loading: Loading,
});
export const BarCharts = Loadable({
  loader: () => import('./Charts/BarCharts'),
  loading: Loading,
});
export const AreaCharts = Loadable({
  loader: () => import('./Charts/AreaCharts'),
  loading: Loading,
});
export const PieCharts = Loadable({
  loader: () => import('./Charts/PieCharts'),
  loading: Loading,
});
export const RadarCharts = Loadable({
  loader: () => import('./Charts/RadarCharts'),
  loading: Loading,
});
export const ScatterCharts = Loadable({
  loader: () => import('./Charts/ScatterCharts'),
  loading: Loading,
});
export const CompossedCharts = Loadable({
  loader: () => import('./Charts/CompossedCharts'),
  loading: Loading,
});
export const ResponsiveCharts = Loadable({
  loader: () => import('./Charts/ResponsiveCharts'),
  loading: Loading,
});

// Pages
export const Login = Loadable({
  loader: () => import('./Pages/Users/Login'),
  loading: Loading,
});
export const Register = Loadable({
  loader: () => import('./Pages/Users/Register'),
  loading: Loading,
});
export const Profile = Loadable({
  loader: () => import('./Pages/UserProfile'),
  loading: Loading,
});
export const SocialMedia = Loadable({
  loader: () => import('./Pages/SocialMedia'),
  loading: Loading,
});
export const BlankPage = Loadable({
  loader: () => import('./Pages/BlankPage'),
  loading: Loading,
});
export const Ecommerce = Loadable({
  loader: () => import('./Pages/Ecommerce'),
  loading: Loading,
});
export const Contact = Loadable({
  loader: () => import('./Pages/Contact'),
  loading: Loading,
});
export const ResetPassword = Loadable({
  loader: () => import('./Pages/Users/ResetPassword'),
  loading: Loading,
});
export const LockScreen = Loadable({
  loader: () => import('./Pages/Users/LockScreen'),
  loading: Loading,
});
export const Chat = Loadable({
  loader: () => import('./Pages/Chat'),
  loading: Loading,
});
export const Email = Loadable({
  loader: () => import('./Pages/Email'),
  loading: Loading,
});
export const Photos = Loadable({
  loader: () => import('./Pages/Photos'),
  loading: Loading,
});
export const Calendar = Loadable({
  loader: () => import('./Pages/Calendar'),
  loading: Loading,
});
export const LoginDedicated = Loadable({
  loader: () => import('./Pages/Standalone/LoginDedicated'),
  loading: Loading,
});

// Maps
export const MapMarker = Loadable({
  loader: () => import('./Maps/MapMarker'),
  loading: Loading,
});
export const MapDirection = Loadable({
  loader: () => import('./Maps/MapDirection'),
  loading: Loading,
});
export const SearchMap = Loadable({
  loader: () => import('./Maps/SearchMap'),
  loading: Loading,
});
export const TrafficIndicator = Loadable({
  loader: () => import('./Maps/TrafficIndicator'),
  loading: Loading,
});
export const StreetViewMap = Loadable({
  loader: () => import('./Maps/StreetViewMap'),
  loading: Loading,
});

// Other
export const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading,
});
export const NotFoundDedicated = Loadable({
  loader: () => import('./Pages/Standalone/NotFoundDedicated'),
  loading: Loading,
});
export const Error = Loadable({
  loader: () => import('./Pages/Error'),
  loading: Loading,
});
export const Maintenance = Loadable({
  loader: () => import('./Pages/Maintenance'),
  loading: Loading,
});
export const Parent = Loadable({
  loader: () => import('./Parent'),
  loading: Loading,
});
export const Settings = Loadable({
  loader: () => import('./Pages/Settings'),
  loading: Loading,
});
export const HelpSupport = Loadable({
  loader: () => import('./Pages/HelpSupport'),
  loading: Loading,
});
