import React from "react";
import Layout from "./Layout";

const AddUser = () => {
  return (
    <Layout>
      <form>
        <div className="space-y-8 text-2xl">
          <div className="w-full space-y-2">
            <label htmlFor="title">Title</label>
            <input
              required
              type="text"
              id="title"
              className="h-10 w-full rounded-md border-2 border-slate-400 px-2 text-xl"
            />
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              type="text"
              id="price"
              className="h-10 w-full rounded-md border-2 border-slate-400 px-2 text-xl"
            />
          </div>
          <div>
            <button
              type="submit"
              className="rounded-sm bg-green-600 px-6 py-1 text-lg font-bold text-slate-50 hover:bg-green-800"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default AddUser;
