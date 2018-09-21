import styled from 'styled-components';

export const LoginWrapper = styled.div`
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    top: 56px;
    background: #eee;
`;

export const LoginBox = styled.div`
    overflow: hidden;
    width: 400px;
    padding: 40px 0 20px 0;
    margin: 100px auto;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    border-radius: 3px;
`;

export const Input = styled.input`
    display: block;
    width: 260px;
    height: 40px;
    line-height: 30px;
    padding: 0 10px;
    margin: 20px auto;
    color: #777;
    border-radius: 3px;
    border: 1px solid #dddddd;
`;

export const Button = styled.div`
    width: 260px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background: #3194d0;
    border-radius: 20px;
    margin: 40px auto;
    text-align: center;
    cursor: pointer;
`;

export const Title = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 40px;
    color: #E36044;
    
`;