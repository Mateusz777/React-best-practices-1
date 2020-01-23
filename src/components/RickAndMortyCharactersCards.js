// KOMPONENTY KONTENEROWE I PREZENTACYJNE

import React from 'react';
import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/';
const UNKNOWN_AVATAR_URL = `${
    process.env.PUBLIC_URL}/images/unknown-avatar.png`;

class RickAndMortyCharactersCards extends React.Component {
    state = {
        characters: [],
    };

    componentDidMount() {
        // axios~~fetch
        /*

        const buttons = document.querySelectorAll("button");

        //zamiast:
        buttons.map((el) => {
        return el.innerText.toUpperCase() + el.id;
        })

        //możemy:
        buttons.map(({innerText : text, id}) => {
        return text.toUpperCase() + id;
        })
        */
       axios.get(API_URL).then(({ data: {results} }) => {
        this.setState({ characters: results });
       });
    }

    renderCards = () =>
        this.state.characters.map(
         ({name, image = UNKNOWN_AVATAR_URL, species, gender}) => (
            <div className="id-card-wrapper" key={name}>
                <div className="id-card">
                    <div className="profile-row">
                        <div className="profile-row__avatar">
                            <img
                                src={image}
                                alt={`${name}'s avatar`}
                                className="avatar__image"
                            />
                        </div>
                        <div className="profile-row__desc">
                            <h1 className="desc__name">{name}</h1>
                            <p>Species: {species}</p>
                            <p>Gender: {gender}</p>
                        </div>
                    </div>
                </div>
            </div>
         )
        )

    render() {
        return this.renderCards();
    }
}
export default RickAndMortyCharactersCards;

/*
komponent działa jak należy jednak komponent RickAndMortyCharactersCards łączy ze sobą warstwę logiczną jak i wizualną,
co w sytuacji jeżeli chcielibyśmy skorzystaś z innego API_URL, pobrać po prostu postaci z innego serialu :)
*/

/*
A WIEC ZMIANY:
tworzymy folder 'containers' i wrzucamy tam nasz komponent klasowy
*/


