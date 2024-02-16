import { Specs } from "@/types/Product";
import React from "react";
import { ImPointRight } from "react-icons/im";
type Props = {
    specifications: Specs;
};

const Specs = (props: Props) => {
    return (
        <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200 max-w-[100vw]">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800 text-xl">Specs</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto max-h-[400px]">
                    <table className="table-auto w-full">
                        <thead className="sticky top-0 text-base font-medium uppercase text-mobile bg-mobile-light">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-medium text-left">
                                        Property
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-medium text-left">
                                        Value
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
                            {props?.specifications &&
                                Object.keys(props?.specifications).map(
                                    (specs: string, index: number) => {
                                        return (
                                            <tr key={index}>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 flex items-center justify-center">
                                                            <ImPointRight className="w-6 h-6 text-mobile" />
                                                        </div>
                                                        <div className="font-medium text-gray-800">
                                                            {specs}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-mobile capitalize">
                                                        {props?.specifications[
                                                            specs
                                                        ] &&
                                                        Array.isArray(
                                                            props
                                                                ?.specifications[
                                                                specs
                                                            ]
                                                        ) &&
                                                        props?.specifications[
                                                            specs
                                                        ] > 0
                                                            ? props?.specifications[
                                                                  specs
                                                              ].map(
                                                                  (
                                                                      val: any
                                                                  ) => {
                                                                      return (
                                                                          val.toString() +
                                                                          " | "
                                                                      );
                                                                  }
                                                              )
                                                            : props?.specifications[
                                                                  specs
                                                              ].toString()}
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Specs;
