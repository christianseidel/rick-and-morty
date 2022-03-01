import {render, waitFor, screen, fireEvent} from "@testing-library/react";
import GalleryItem from "./GalleryItem";
import Gallery from "./Gallery";
import galleryItem from "./GalleryItem";

test ('testing whether http request is handled', async () => {
    // given
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({
            ok: true,
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
                            species: 'Planet Tenapl'
                        },
                    ]

                }
            )
        } as Response);
    })
    render(<Gallery />);

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

