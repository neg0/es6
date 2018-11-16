export const Validator = (date, coupon) => {
    return coupon.length > 0 &&
        date > new Date();
};