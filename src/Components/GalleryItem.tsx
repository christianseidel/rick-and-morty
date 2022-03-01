
interface GalleryItemProps {

    name : string;
    Species : string;
    origin : string;
    img : string;
    status: string;

}


function GalleryItem(props : GalleryItemProps) {
    return (
        <div>
            <div className={'card'}>
                <h1 data-testid={"character-name"} className={'card_text'}>
                    {props.name} 
                </h1>

                <p>
                    <img src={props.img}/>
                </p>

                <div className={'card_text'}>
                    <h3 data-testid={"character-species"}>Art: {props.Species} &ndash; Status: {props.status}</h3>
                    <h3 className={'h3_last'}> Herkunft: {props.origin}</h3>
                </div>


            </div>
        </div>
    )
}


export default GalleryItem;