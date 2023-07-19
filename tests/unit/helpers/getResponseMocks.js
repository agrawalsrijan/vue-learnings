import { RESPONSE_STATUS_CODES } from '@/config/constants';

const { STATUS_BAD_REQUEST, STATUS_OK } = RESPONSE_STATUS_CODES;

export const getErrorResponse = ({ status = STATUS_BAD_REQUEST } = {}) => ({
    head: { status, message: 'some error' },
    error: {
        details: [{ target: 'field' }],
        message: 'Some error in field',
        code: 'ValidationError',
        target: 'target',
    },
    status,
});

export const getSuccessResponse = ({ status = STATUS_OK, data = {} } = {}) => ({
    head: { status, message: '' },
    data,
});
