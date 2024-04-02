import { useState } from "react";

export const useModal = () => {
    const [toggleModal, setToggleModal] = useState(false);

    const onToggleModal = () => setToggleModal((prev) => !prev);

    return { toggleModal, onToggleModal };
}

