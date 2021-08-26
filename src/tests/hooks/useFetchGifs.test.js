import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe('Testing in useFetchGifs Hook', () => {
    test('Return start state', async () => {    
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Space X'));                
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Return image arrangement and loading in false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Space X'));
        await waitForNextUpdate();

        const { data, loading } = result.current;
        expect(data.length).toBe(5);
        expect(loading).toBe(false);
    });
    
});
