import { getGifs } from "../../helpers/getGifs"

describe('Testing getGifs Fetch', () => {
    test('Get 10 elements', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(5);
    }); 
    
    test('Get 10 elements', async () => {
        const gifs = await getGifs('');        
        expect(gifs.length).toBe(0);
    }); 
});
