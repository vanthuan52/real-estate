"use client";
export default function NotFoundPage() {
  return (
    <div className="mt-20 flex items-center justify-center text-center ">
      <div className="max-w-screen-xl mx-auto flex-col items-center justify-center">
        <div className="sm:mb-10 mb-6 overflow-hidden">
          <div>
            <h1 className="font-extrabold sm:text-9xl text-8xl text-destructive">
              404
            </h1>
            <p className="sm:mt-6 mt-4 uppercase font-medium sm:text-2xl text-xl font-sans">
              Không tìm thấy trang
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
