import fetch from 'cross-fetch';
import * as types from '../constants/actionTypes';

const checkNodeStatusStart = (node) => {
  return {
    type: types.CHECK_NODE_STATUS_START,
    node
  };
};

const checkNodeStatusSuccess = (node, res) => {
  return {
    type: types.CHECK_NODE_STATUS_SUCCESS,
    node,
    res
  };
};

const checkNodeStatusFailure = node => {
  return {
    type: types.CHECK_NODE_STATUS_FAILURE,
    node,
  };
};

const checkNodeBlockStart = (node) => {
  return {
    type: types.CHECK_NODE_BLOCK_START,
    node
  };
};

const checkNodeBlockSuccess = (node, res) => {
  return {
    type: types.CHECK_NODE_BLOCK_SUCCESS,
    node,
    res
  };
};

const checkNodeBlockFailure = node => {
  return {
    type: types.CHECK_NODE_BLOCK_FAILURE,
    node,
  };
};

export function checkNodeStatus(node) {
  return async (dispatch) => {
    try {
      dispatch(checkNodeStatusStart(node));
      const res = await fetch(`${node.url}/api/v1/status`);

      if (res.status >= 400) {
        dispatch(checkNodeStatusFailure(node));
      }

      const json = await res.json();

      dispatch(checkNodeStatusSuccess(node, json));
    } catch (err) {
      dispatch(checkNodeStatusFailure(node));
    }
  };
}

export function fetchNodeBlocks(node) {
  return async (dispatch) => {
    try {
      dispatch(checkNodeBlockStart(node));
      const res = await fetch(`${node.url}/api/v1/blocks`);

      if (res.status >= 400) {
        dispatch(checkNodeBlockFailure(node));
      }

      const json = await res.json();

      dispatch(checkNodeBlockSuccess(node, json));
    } catch (err) {
      dispatch(checkNodeBlockFailure(node));
    }
  };
}


export function checkNodeStatuses(list) {
  return (dispatch) => {
    list.forEach(node => {
      dispatch(checkNodeStatus(node));
    });
  };
}
