import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DesignTokenColors from '../../Style/DesignTokenColors';
import numberWithCommas from '../../../utils/numberWithCommas';
import HeartFavoriteToggleIcon from './HeartFavoriteToggleIcon';

class HeartFavoriteToggleBase extends Component {
  constructor (props) {
    super(props);
    this.state = {
      campaignXOpposersCountLocal: 0,
      campaignXSupportersCountFromAPI: 0,
      campaignXSupportersCountLocal: 0,
      voterOpposesLocal: false,
      voterSupportsLocal: false,
    };
  }

  componentDidMount () {
    this.onCampaignStoreChange();
  }

  onCampaignStoreChange () {
    const { campaignXOpposersCount, campaignXSupportersCount, voterSupports, voterOpposes } = this.props;
    this.setState({
      campaignXSupportersCountFromAPI: campaignXSupportersCount,
      campaignXOpposersCountLocal: campaignXOpposersCount,
      campaignXSupportersCountLocal: campaignXSupportersCount,
      voterSupportsLocal: voterSupports,
      voterOpposesLocal: voterOpposes,
    });
  }

  componentDidUpdate (prevProps) {
    // console.log('SupportButton componentDidUpdate');
    const {
      campaignXSupportersCount: campaignXSupportersCountPrevious,
      campaignXWeVoteId: campaignXWeVoteIdPrevious,
    } = prevProps;
    const {
      campaignXSupportersCount,
      campaignXWeVoteId,
    } = this.props;
    if (campaignXWeVoteId) {
      if (campaignXWeVoteId !== campaignXWeVoteIdPrevious) {
        this.onCampaignStoreChange();
      } else if (campaignXSupportersCount !== campaignXSupportersCountPrevious) {
        this.onCampaignStoreChange();
      }
    }
  }

  handleOpposeClick = () => {
    const { voterSignedInWithEmail } = this.props;
    const {
      campaignXOpposersCountLocal: campaignXOpposersCountLocalPrevious,
      campaignXSupportersCountLocal: campaignXSupportersCountLocalPrevious,
      showSignInPromptOpposes: showSignInPromptOpposesPrevious,
      voterOpposesLocal: voterOpposesLocalPrevious,
      voterSupportsLocal: voterSupportsLocalPrevious,
    } = this.state;
    if (!voterSignedInWithEmail) {
      // Toggle sign in prompt
      this.setState({
        showSignInPromptOpposes: !showSignInPromptOpposesPrevious,
        showSignInPromptSupports: false,
      });
    } else {
      this.setState({
        voterSupportsLocal: false,
        voterOpposesLocal: !voterOpposesLocalPrevious,
      }, () => {
        if (voterOpposesLocalPrevious) {
          this.setState({
            campaignXOpposersCountLocal: campaignXOpposersCountLocalPrevious - 1,
          });
        } else {
          this.setState({
            campaignXOpposersCountLocal: campaignXOpposersCountLocalPrevious + 1,
          });
          if (voterSupportsLocalPrevious) {
            this.setState({
              campaignXSupportersCountLocal: campaignXSupportersCountLocalPrevious - 1,
            });
          }
        }
      });
    }
  };

  handleSignInClick = () => {
    const { voterSignedInWithEmail } = this.props;
    if (!voterSignedInWithEmail) {
      if (this.props.submitSupport) {
        this.props.submitSupport();
      }
    }
  };

  handleSupportClick = () => {
    const { voterSignedInWithEmail } = this.props;
    const {
      campaignXOpposersCountLocal: campaignXOpposersCountLocalPrevious,
      campaignXSupportersCountLocal: campaignXSupportersCountLocalPrevious,
      showSignInPromptSupports: showSignInPromptSupportsPrevious,
      voterOpposesLocal: voterOpposesLocalPrevious,
      voterSupportsLocal: voterSupportsLocalPrevious,
    } = this.state;
    if (!voterSignedInWithEmail) {
      // Toggle sign in prompt
      this.setState({
        showSignInPromptSupports: !showSignInPromptSupportsPrevious,
        showSignInPromptOpposes: false,
      });
    } else {
      this.setState({
        voterSupportsLocal: !voterSupportsLocalPrevious,
        voterOpposesLocal: false,
      }, () => {
        if (voterSupportsLocalPrevious) {
          this.setState({
            campaignXSupportersCountLocal: campaignXSupportersCountLocalPrevious - 1,
          });
        } else {
          this.setState({
            campaignXSupportersCountLocal: campaignXSupportersCountLocalPrevious + 1,
          });
          if (voterOpposesLocalPrevious) {
            this.setState({
              campaignXOpposersCountLocal: campaignXOpposersCountLocalPrevious - 1,
            });
          }
        }
      });
      if (this.props.submitSupport) {
        this.props.submitSupport();
      }
    }
  };

  render () {
    const {
      voterSignedInWithEmail,
    } = this.props;
    const {
      campaignXSupportersCountLocal,
      campaignXOpposersCountLocal,
      showSignInPromptOpposes,
      showSignInPromptSupports,
      voterOpposesLocal,
      voterSupportsLocal,
    } = this.state;
    // console.log('campaignXSupportersCountLocal', campaignXSupportersCountLocal, 'campaignXOpposersCountLocal', campaignXOpposersCountLocal);
    return (
      <HeartFavoriteToggleContainer>
        <LikeContainer onClick={() => this.handleSupportClick()}>
          <HeartFavoriteToggleIcon
            isFavorite
            voterSupports={voterSupportsLocal}
          />
          {!voterOpposesLocal && numberWithCommas(campaignXSupportersCountLocal)}
          {/* Add "like this politician?" popout */}
          {(!voterSignedInWithEmail && showSignInPromptSupports) && (
            <span onClick={() => this.handleSignInClick()}> sign in</span>
          )}
        </LikeContainer>
        <DislikeContainer onClick={() => this.handleOpposeClick()}>
          <HeartFavoriteToggleIcon
            isDislike
            voterOpposes={voterOpposesLocal}
          />
          {voterOpposesLocal && numberWithCommas(campaignXOpposersCountLocal)}
          {/* Add "Don't like this politician?" popout */}
          {(!voterSignedInWithEmail && showSignInPromptOpposes) && (
            <span onClick={() => this.handleSignInClick()}> sign in</span>
          )}
        </DislikeContainer>
      </HeartFavoriteToggleContainer>
    );
  }
}

HeartFavoriteToggleBase.propTypes = {
  campaignXOpposersCount: PropTypes.number,
  campaignXSupportersCount: PropTypes.number,
  campaignXWeVoteId: PropTypes.string,
  submitSupport: PropTypes.func,
  voterSignedInWithEmail: PropTypes.bool,
  voterSupports: PropTypes.bool,
  voterOpposes: PropTypes.bool,
};

const HeartFavoriteToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  border-radius: 20px;
  padding-left: 8px;
  padding-right: 8px;
  border: 1px solid ${DesignTokenColors.neutralUI100};
  background: ${DesignTokenColors.whiteUI};
`;

const LikeContainer = styled.div`
  display: flex;
  padding-right: 8px;
  border-right: 1px solid ${DesignTokenColors.neutralUI100};
  cursor: pointer;
`;

const DislikeContainer = styled.div`
  display: flex;
  padding-left: 8px;
  cursor: pointer;
`;

export default HeartFavoriteToggleBase;
