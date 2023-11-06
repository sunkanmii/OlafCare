import {useState} from 'react';
import {createContainer} from 'react-tracked';

const initialGlobalState = {
    data: 'data'
}

const useValue = () => useState(initialGlobalState);

export const { Provider: SharedStateProvider, useTracked: useSharedState } = createContainer(useValue);