import moment from 'moment';

export const getFormattedDate = date => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};