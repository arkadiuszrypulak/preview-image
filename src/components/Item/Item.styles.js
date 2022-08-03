import styled from "styled-components";

export const ItemList = styled.li`
    background-color: #eee;
    padding: 10px 40px;
    max-width: 123px;
    text-align: center;
    cursor: pointer;
    border-top: 1px solid #dedede;
    transition: background-color .3s;

    &:first-child {
        border-top: none;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    &:hover,
    &:active {
        background-color: #dedede;
    }
`;
