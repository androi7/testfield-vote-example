import React from 'react';
import PropTypes from 'prop-types';
import ChoiceBar from './ChoiceBar';

export default class VotingComponent extends React.Component {
    render() {
        const { vote } = this.props;
        return (
            <div className="Row VotingRow Spacer">
                <div className="Head">
                    <h1 className="Title">{vote.title}
                        <div className="Badge">{vote.totalVotes} Votes</div>
                    </h1>
                    <div className="Description Emphasis">{vote.description}</div>
                </div>
                <div>
                    {vote.choices.map(choice => <ChoiceBar key={choice.id} {...choice}/>)}
                </div>
            </div>
        );
    }
}

VotingComponent.propTypes = {
    vote: PropTypes.object.isRequired // ohne React.PropTypes...
};