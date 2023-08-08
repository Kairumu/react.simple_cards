import axios from 'axios';

const _getRandomImg = async (num_of_imgs=1) => {
    const results = await Promise.all(
        Array(num_of_imgs).fill(1).map(async (_, idx) => {
            const result =  await axios({
                method  : "get",
                url     : "https://source.unsplash.com/random"
            });
            return result.request.responseURL;
        })
    );
    return results.map((_, idx) => ({img:_, text:`unsplash_${idx}`}));
};

export { _getRandomImg };
