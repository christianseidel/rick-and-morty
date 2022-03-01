import { render, waitFor, screen } from '@testing-library/react';
import {getByTestId} from '@testing-library/react'
import GalleryItem from "./GalleryItem";

test('whether component is rendered correctly', () => {
    // given
    const character = {
        id: 4711,
        name: 'Rick',
        Species: "Ottoman",
        status: "Alive",
        image: 'http://imageurl'
    }

    // when
    const {getByTestId} = render (<GalleryItem name={character.name} Species={'Monster'} origin={'Alive'} img={''} status={''}/>)

    // then
    expect(getByTestId('character-name').textContent).toEqual('Rick');
 //   expect(getByTestId('character-status').textContent).toEqual("Art: Ottoman – Status: Alive");

} )
