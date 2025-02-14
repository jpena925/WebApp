import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TruncateMarkup from 'react-truncate-markup';
import styled from 'styled-components';
import { renderLog } from '../../utils/logging';

export default class ReadMore extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      readMore: true,
    };
    this.toggleLines = this.toggleLines.bind(this);
  }

  // this onKeyDown function is for accessibility: both toggle links
  // have a tab index so that users can use tab key to select the link, and then
  // press either space or enter (key codes 32 and 13, respectively) to toggle
  onKeyDown (event) {
    const enterAndSpaceKeyCodes = [13, 32];
    if (enterAndSpaceKeyCodes.includes(event.keyCode)) {
      this.toggleLines(event);
    }
  }

  toggleLines (event) {
    event.preventDefault();
    const { readMore } = this.state;
    if (readMore && this.props.onShowMoreAlternateFunction) {
      this.props.onShowMoreAlternateFunction();
    } else {
      this.setState({
        readMore: !readMore,
      });
    }
  }

  render () {
    renderLog('ReadMore');  // Set LOG_RENDER_EVENTS to log all renders
    let {
      textToDisplay, linkText, numberOfLines, collapseText,
    } = this.props;
    const { readMore } = this.state;
    // default prop values
    if (numberOfLines === undefined) {
      numberOfLines = 3;
    }
    if (linkText === undefined) {
      linkText = '(show more)';
    }
    if (collapseText === undefined) {
      collapseText = '(show less) ';
    }

    let expandedTextArray = [];
    let keyBasedOnTextToDisplay = [];
    if (textToDisplay) {
      // remove extra ascii carriage returns or other control text
      textToDisplay = textToDisplay.replace(/[\x0D-\x1F]/g, ''); // eslint-disable-line no-control-regex
      expandedTextArray = textToDisplay.replace(/(?:\r\n|\r|\n){2,}/g, '\r\n\r\n').split(/(?:\r\n|\r|\n)/g);
      keyBasedOnTextToDisplay = textToDisplay.substring(0, 20).toLowerCase().replace(/\s/g, '') || 'notext';
    }
    // convert text into array, splitting on line breaks

    // There are cases where we would like to show line breaks when there is a little bit of text
    let notEnoughTextToTruncate = false;
    let allLinesShort = true;
    let maxNumOfLines = numberOfLines;
    // max num of lines shouldn't be greater than the total num of line breaks hard coded
    if (maxNumOfLines > expandedTextArray.length) {
      maxNumOfLines = expandedTextArray.length;
    }
    for (let i = 0; i < maxNumOfLines; i++) {
      if (expandedTextArray[i].length > 38) {
        allLinesShort = false;
        break;
      }
    }
    if (expandedTextArray.length <= numberOfLines && allLinesShort) {
      notEnoughTextToTruncate = true;
    }
    // wrap text in array in separate spans with html line breaks
    let itemKey = 'x';
    const expandedTextToDisplay = expandedTextArray.map((item, index) => { // https://dev.to/jtonzing/the-significance-of-react-keys---a-visual-explanation--56l7
      itemKey = `${item}-${index.toString()}`;
      if (index === 0) {
        return (
          <span key={`key-a-${itemKey}-${keyBasedOnTextToDisplay}`}>
            {item}
          </span>
        );
      } else if (index >= expandedTextArray.length - 2 && item === '') {
        return (
          <span key={`key-b-${itemKey}-${keyBasedOnTextToDisplay}`}>
            {item}
          </span>
        );
      } else {
        return (
          <span key={`key-c-${itemKey}-${keyBasedOnTextToDisplay}`}>
            <br />
            {item}
          </span>
        );
      }
    });

    if (notEnoughTextToTruncate) {
      return <span className={this.props.className}>{expandedTextToDisplay}</span>;
    }

    const showMoreEllipsis = (
      <ShowMoreEllipsisSpan>
        &hellip;
        {' '}
        <a //eslint-disable-line
          className="u-link-color u-link-underline-on hover u-no-break"
          href="#"
          id="readMore"
          onClick={this.toggleLines}
          onKeyDown={this.onKeyDown.bind(this)}
        >
          {linkText}
        </a>

      </ShowMoreEllipsisSpan>
    );

    if (readMore) {
      return (
        <ReadMoreExpandedWrapper className="text">
          <TruncateMarkup lines={numberOfLines} ellipsis={showMoreEllipsis} tokenize="words">
            <span>
              {textToDisplay}
            </span>
          </TruncateMarkup>
        </ReadMoreExpandedWrapper>
      );
    } else {
      return (
        <ReadMoreCollapsedWrapper>
          {expandedTextToDisplay}
          {' '}
          <a //eslint-disable-line
            className="u-link-color u-link-underline-on hover u-no-break"
            href="#"
            id="showLess"
            onClick={this.toggleLines}
            onKeyDown={this.onKeyDown.bind(this)}
          >
            {collapseText}
          </a>
        </ReadMoreCollapsedWrapper>
      );
    }
  } // end render
}
ReadMore.propTypes = {
  className: PropTypes.string,
  collapseText: PropTypes.node,
  linkText: PropTypes.node,
  numberOfLines: PropTypes.number,
  onShowMoreAlternateFunction: PropTypes.func,
  textToDisplay: PropTypes.node.isRequired,
};

const ReadMoreCollapsedWrapper = styled('span')`
`;

const ReadMoreExpandedWrapper = styled('span')`
`;

const ShowMoreEllipsisSpan = styled('span')`
`;
