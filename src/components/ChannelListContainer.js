import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    .loading-text {
        background: #333;
        padding: 20px;
        font-size: 14px;
    }

    .loading-text {
        color: #ccc;
    }
`;

export default function ChannelListContainer({loading,childen}) {
    const loadingText = "Channels loading...";

    return (
        <Container>
            {loading ? <div className="loading-text">{loadingText}</div> : childen}
        </Container>
    )
}