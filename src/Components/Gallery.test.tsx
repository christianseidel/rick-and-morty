import {render, waitFor, screen, fireEvent} from "@testing-library/react";
import Gallery from "./Gallery";
import galleryItem from "./GalleryItem";
import {MemoryRouter} from "react-router-dom";

test ('testing whether http request is handled', async () => {
    // given
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({
            status : 200,
            json: () => Promise.resolve(
                {info:{},
                    results: [
                        {
                            id: '003',
                            name: 'Hubert',
                            status: 'Alive',
                            image: 'mein bild',
                            origin: {name: 'Earth'},
                            species: 'Outer World'
                        },
                        {
                            id: '006',
                            name: 'Marie',
                            status: 'auch alive',
                            image: 'ohne bild',
                            origin: {name: 'Earth'},
                            species: 'Other World'
                        },
                    ]

                }
            )
        } as Response);
    })
    render(<Gallery />, {wrapper: MemoryRouter});

    await waitFor(() => {
        expect(screen.getAllByTestId('gallery-item').length).toEqual(2)
        }
    )

    const out = screen.getByTestId('search-field')
    fireEvent.change(out, {target: {value: 'Marie'}})

    await waitFor(() => {
        expect(screen.getAllByTestId('gallery-item').length).toEqual(1)
    })
})

