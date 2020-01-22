import {profile, update} from "./user";
import {getMultipleEventsByIds} from "./event";

export const getCreatedEventsByUser = () =>
{
    return new Promise((resolve, reject) =>
    {
        profile()
            .then(res =>
            {
                if (res.created_events)
                {
                    getMultipleEventsByIds(res.created_events)
                        .then(res => resolve(res))
                        .catch(err => reject(err));
                } else
                {
                    resolve([])
                }
            })
            .catch(err => reject(err));
    });
};

export const getLikedEventIdsByUser = () =>
{
    return new Promise((resolve, reject) =>
    {
        profile()
            .then(res => resolve(res.liked_events))
            .catch(err => reject(err));
    });
};

export const getLikedEventsByUser = () =>
{
    return new Promise((resolve, reject) =>
    {
        profile()
            .then(res =>
            {
                if (res.liked_events)
                {
                    getMultipleEventsByIds(res.liked_events)
                        .then(res => resolve(res))
                        .catch(err => reject(err));
                } else
                {
                    resolve([])
                }
            })
            .catch(err => reject(err));
    });
};

export const setLikedEventIdByUser = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        profile()
            .then(user =>
            {
                if (user.liked_events) user.liked_events.push(id);
                else user.append('liked_events', id);
                update(user)
                    .then(res => resolve(res))
                    .catch(err => reject(err));
            })
            .catch(err => reject(err));
    });
};

export const insetLikedEventIdByUser = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        profile()
            .then(user =>
            {
                const index = user.liked_events.indexOf(id);
                if (index !== -1) user.liked_events.splice(index, 1);
                update(user)
                    .then(res => resolve(res.data))
                    .catch(err => reject(err));
            })
            .catch(err => reject(err));
    });
};