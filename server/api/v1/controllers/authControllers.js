const catchAsync = require('../../../utils/catchAsync');
const AppError = require('../../../utils/appError');

exports.login = catchAsync(async (req, res, next) => {
    const { firmNr, login, password } = req.body;
    if (!firm || !login || !password) {
        return next(
            new AppError('firmNr, login and password are required', 400)
        );
    }
    // TODO: check password and
    res.json({
        token: 'token',
        refreshToken: 'refresh_token',
    });
});
