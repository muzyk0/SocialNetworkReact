import React from "react";
import { create } from "react-test-renderer";
import EditableSpan from "./EditableSpanClass";

describe("EditableSpan component", () => {
    test("status from props should be in the state", () => {
        const component = create(
            <EditableSpan status="This status" updateStatus={() => {}} />
        );
        const instance = component.getInstance();
        //@ts-ignore
        expect(instance?.state.status).toBe("This status");
    });

    test("after creation <span> should be displayed", () => {
        const component = create(
            <EditableSpan status="This status" updateStatus={() => {}} />
        );
        const root = component.root;
        const span = root.findByType("span");
        expect(span).toBeDefined();
    });

    test("after creation <span> with should contains correct status", () => {
        const component = create(
            <EditableSpan status="This status" updateStatus={() => {}} />
        );
        const root = component.root;
        const span = root.findByType("span");
        expect(span?.props.children).toBe("This status");
    });

    test("after creation <input> shouldn't  be displayed", () => {
        const component = create(
            <EditableSpan status="This status" updateStatus={() => {}} />
        );
        const root = component.root;
        expect(() => {
            root.findByType("input");
        }).toThrow();
    });

    test("input should be display in editMode instead of span", () => {
        const component = create(
            <EditableSpan status="This status" updateStatus={() => {}} />
        );
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");

        expect(input.props.value).toBe("This status");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(
            <EditableSpan status="This status" updateStatus={mockCallback} />
        );
        const instance = component.getInstance();
        //@ts-ignore
        instance.deactivateEditMode();

        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
