import { render, waitFor, screen } from '@testing-library/react';
import {getByTestId} from '@testing-library/react'
import GalleryItem from "./GalleryItem";
import {MemoryRouter} from "react-router-dom";

test('whether component is rendered correctly', () => {
    // given
    const character = {
        id: 808,
        name: 'Rick',
        Species: "Ottoman",
        status: "Alive",
        image: 'http://imageurl'
    }

    // when
    render (<GalleryItem name={character.name} id={808} Species={'Monster'} origin={'Alive'} img={''} status={''}/>, {wrapper: MemoryRouter});

    // then
    expect(screen.getByTestId('character-name').textContent).toEqual('Rick');
 //   expect(getByTestId('character-status').textContent).toEqual("Art: Ottoman – Status: Alive");

} )
